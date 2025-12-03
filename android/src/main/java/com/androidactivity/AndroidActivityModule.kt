package com.androidactivity

import android.app.Activity
import android.content.ComponentName
import android.content.Intent
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule


@ReactModule(name = AndroidActivityModule.NAME)
class AndroidActivityModule(reactContext: ReactApplicationContext) :
  NativeAndroidActivitySpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun startActivity(
    requestCode: Double,
    className: String?,
    packageName: String?,
    promise: Promise?
  ) {
    if (className == null) {
      promise?.reject("E_CLASS_NAME_MISSING", "ClassName is required.")
      return
    }

    val currentActivity = reactApplicationContext.getCurrentActivity()
    if (currentActivity == null) {
      promise?.reject("E_NO_CURRENT_ACTIVITY", "Current activity is not available.")
      return
    }

    try {
      val componentName = if (packageName != null) {
        ComponentName(packageName, className)
      } else {
        ComponentName(reactApplicationContext, className)
      }
      val intent = Intent()
      intent.component = componentName
      currentActivity.startActivityForResult(intent, requestCode.toInt())
      promise?.resolve(true)
    } catch (e: Exception) {
      promise?.reject("E_START_ACTIVITY_FAILED", "Failed to start activity: ${e.message}", e)
    }
  }

  override fun finishActivity(requestCode: Double) {
    val currentActivity = reactApplicationContext.getCurrentActivity()
    currentActivity?.finishActivity(requestCode.toInt())
  }

  companion object {
    const val NAME = "AndroidActivity"
  }
}
