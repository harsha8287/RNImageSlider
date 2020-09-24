package com.rntest;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.Map;
import java.util.HashMap;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.content.Context;
public class CheckInternetModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  CheckInternetModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

   @Override
  public String getName() {
    return "CheckInternet";
  }

   @ReactMethod
  public void getInternetStatus(Callback errorCallback,Callback successCallback) {
    try {
        ConnectivityManager cm = (ConnectivityManager) getReactApplicationContext().getSystemService(Context.CONNECTIVITY_SERVICE);
        Boolean internetStatus = cm.getActiveNetworkInfo() != null && cm.getActiveNetworkInfo().isConnected();
         successCallback.invoke(internetStatus);
      } catch (Exception ex) {
        errorCallback.invoke(ex.getMessage());
      }
  }
}