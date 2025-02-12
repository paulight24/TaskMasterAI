import Parse from 'parse';

export function initializeParse() {
  Parse.initialize(
    'IM7Qln6yostAZLHnEhhfpqVqlT2Dct5E8nTzV59X',  // Replace with your Back4App App ID
    'PR1gj9R2Z7cgbzgcgfZc4TtgSFIFge0dprIBGyFK'   // Replace with your Back4App JavaScript Key
  );
  Parse.serverURL = 'https://parseapi.back4app.com/';
}
