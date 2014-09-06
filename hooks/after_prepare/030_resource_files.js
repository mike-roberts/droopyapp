#!/usr/bin/env node

//
// This hook copies various resource files from our version control system directories into the appropriate platform specific location
//


// configure all the files to copy.  Key of object is the source file, value is the destination location.  It's fine to put all platforms' icons and splash screen files here, even if we don't build for all platforms on each developer's box.
var filestocopy = [{
  "res/android/icon.png": "platforms/android/res/drawable/icon.png"
},  {
  "res/android/ldpi.png": "platforms/android/res/drawable-ldpi/icon.png"
}, {
  "res/android/mdpi.png": "platforms/android/res/drawable-mdpi/icon.png"
}, {
  "res/android/hdpi.png": "platforms/android/res/drawable-hdpi/icon.png"
}, {
  "res/android/xhdpi.png": "platforms/android/res/drawable-xhdpi/icon.png"
}, {
  "res/android/xxhdpi.png": "platforms/android/res/drawable-xxhdpi/icon.png"
}, {
  "res/android/screen-ldpi-landscape.png": "platforms/android/res/drawable-land-ldpi/screen.png"
}, {
  "res/android/screen-mdpi-landscape.png": "platforms/android/res/drawable-land-mdpi/screen.png"
}, {
  "res/android/screen-hdpi-landscape.png": "platforms/android/res/drawable-land-hdpi/screen.png"
}, {
  "res/android/screen-xhdpi-landscape.png": "platforms/android/res/drawable-land-xhdpi/screen.png"
}, {
  "res/android/screen-ldpi-portrait.png": "platforms/android/res/drawable-port-ldpi/screen.png"
}, {
  "res/android/screen-mdpi-portrait.png": "platforms/android/res/drawable-port-mdpi/screen.png"
}, {
  "res/android/screen-hdpi-portrait.png": "platforms/android/res/drawable-port-hdpi/screen.png"
}, {
  "res/android/screen-xhdpi-portrait.png": "platforms/android/res/drawable-port-xhdpi/screen.png"
}, {
  "res/ios/icon.png": "platforms/ios/droopyapp/Resources/icons/icon.png"
}, {
  "res/ios/icon@2x.png": "platforms/ios/droopyapp/Resources/icons/icon@2x.png"
}, {
  "res/ios/icon-40.png": "platforms/ios/droopyapp/Resources/icons/icon-40.png"
}, {
  "res/ios/icon-40@2x.png": "platforms/ios/droopyapp/Resources/icons/icon-40@2x.png"
}, {
  "res/ios/icon-50.png": "platforms/ios/droopyapp/Resources/icons/icon-50.png"
}, {
  "res/ios/icon-50@2x.png": "platforms/ios/droopyapp/Resources/icons/icon-50@2x.png"
}, {
  "res/ios/icon-60.png": "platforms/ios/droopyapp/Resources/icons/icon-60.png"
}, {
  "res/ios/icon-60@2x.png": "platforms/ios/droopyapp/Resources/icons/icon-60@2x.png"
}, {
  "res/ios/icon-72.png": "platforms/ios/droopyapp/Resources/icons/icon-72.png"
}, {
  "res/ios/icon-72@2x.png": "platforms/ios/droopyapp/Resources/icons/icon-72@2x.png"
}, {
  "res/ios/icon-76.png": "platforms/ios/droopyapp/Resources/icons/icon-76.png"
}, {
  "res/ios/icon-76@2x.png": "platforms/ios/droopyapp/Resources/icons/icon-76@2x.png"
}, {
  "res/ios/icon-small.png": "platforms/ios/droopyapp/Resources/icons/icon-small.png"
}, {
  "res/ios/icon-small@2x.png": "platforms/ios/droopyapp/Resources/icons/icon-small@2x.png"
}, {
  "res/ios/Default~iphone.png": "platforms/ios/droopyapp/Resources/splash/Default~iphone.png"
}, {
  "res/ios/Default@2x~iphone.png": "platforms/ios/droopyapp/Resources/splash/Default@2x~iphone.png"
}, {
  "res/ios/Default-568h@2x~iphone.png": "platforms/ios/droopyapp/Resources/splash/Default-568h@2x~iphone.png"
}, {
  "res/ios/Default~iphone.png": "platforms/ios/droopyapp/Resources/splash/Default~iphone.png"
}, {
  "res/ios/Default-Portrait~ipad.png": "platforms/ios/droopyapp/Resources/splash/Default-Portrait~ipad.png"
}, {
  "res/ios/Default-Portrait@2x~ipad.png": "platforms/ios/droopyapp/Resources/splash/Default-Portrait@2x~ipad.png"
}, {
  "res/ios/Default-Landscape~ipad.png": "platforms/ios/droopyapp/Resources/splash/Default-Landscape~ipad.png"
}, {
  "res/ios/Default-Landscape@2x~ipad.png": "platforms/ios/droopyapp/Resources/splash/Default-Landscape@2x~ipad.png"
}];

var fs = require('fs');
var path = require('path');

// no need to configure below
var rootdir = process.argv[2];

filestocopy.forEach(function(obj) {
    Object.keys(obj).forEach(function(key) {
        var val = obj[key];
        var srcfile = path.join(rootdir, key);
        var destfile = path.join(rootdir, val);
        //console.log("copying "+srcfile+" to "+destfile);
        var destdir = path.dirname(destfile);
        if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
            fs.createReadStream(srcfile).pipe(fs.createWriteStream(destfile));
        }
    });
});
