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
    className: String?,
    packageName: String?,
    promise: Promise?
  ) {
    if (className == null) {
      promise?.reject("CLASS_NAME_MISSING", "ClassName is required.")
      return
    }

    val currentActivity = reactApplicationContext.getCurrentActivity()
    if (currentActivity == null) {
      promise?.reject("NO_CURRENT_ACTIVITY", "Current activity is not available.")
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
      currentActivity.startActivity(intent)
      promise?.resolve(true)
    } catch (e: Exception) {
      promise?.reject("START_ACTIVITY_FAILED", "Failed to start activity: ${e.message}", e)
    }
  }

  override fun finishCurrentActivity() {
    val currentActivity = reactApplicationContext.getCurrentActivity()
    currentActivity?.finish()
  }

  companion object {
    const val NAME = "AndroidActivity"
  }
}
