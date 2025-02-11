# TaskMaster AI

TaskMaster AI is an **Ionic Angular 19** mobile application designed to help users **manage tasks efficiently** using **AI-powered scheduling**, **speech recognition**, and **text-to-speech** features. The app integrates with **Back4App (Parse)** for task storage and **OpenAI** for task structuring.

## Features
- ✅ **AI-Powered Task Structuring** (via OpenAI API)
- 🎤 **Speech Recognition** (via @capacitor-community/speech-recognition)
- 🔊 **Text-to-Speech** (via @capacitor-community/text-to-speech)
- 📅 **Task Management** (via Parse/Back4App)
- 📱 **Cross-Platform Support** (iOS & Android via Capacitor)

## Tech Stack
- **Node.js**: v22.13.1
- **Ionic**: v8.0.0
- **Angular**: v19.0.0
- **Capacitor**: v7.0.1
- **CocoaPods**: v1.16.2 (for iOS plugins)

## Installation & Setup
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/paulight24/TaskMasterAI.git
cd TaskMasterAI
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Setup API Keys**
Edit `src/environments/environment.ts` and add:
```typescript
export const environment = {
  production: false,
  parseAppId: 'YOUR_PARSE_APP_ID',
  parseRESTApiKey: 'YOUR_PARSE_REST_API_KEY',
  parseServerUrl: 'https://parseapi.back4app.com/',
  openAiApiKey: 'YOUR_OPENAI_API_KEY'
};
```

### **4️⃣ Add Capacitor Platforms**
```bash
npx cap add ios
npx cap add android
npx cap sync
```

### **5️⃣ Setup iOS (If Running on Mac)**
```bash
xcode-select --install  # Install Xcode
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
brew install cocoapods  # Install CocoaPods
cd ios/App
pod install
cd ../../
npx cap open ios
```

### **6️⃣ Run the App on a Device**
#### **📱 Android**
```bash
npx cap run android --device
```
#### **📱 iOS**
```bash
npx cap run ios --device
```

## Contribution Guidelines
- **Fork the repository** and submit a **pull request** with your changes.
- Ensure code follows **best practices** for **Angular & Capacitor**.

## License
This project is **open-source** and available under the [MIT License](LICENSE).

---
🚀 **TaskMaster AI – Your Personal AI Task Assistant!**



# 3️⃣ How to Clone and Rebuild Later - 2nd time comming
# Clone the repo
git clone https://github.com/paulight24/TaskMasterAI.git
cd TaskMasterAI

# Install dependencies
npm install

# Restore Capacitor platforms
npx cap add ios
npx cap add android
npx cap sync

# Open in IDE
npx cap open ios  # For Xcode
npx cap open android  # For Android Studio
