import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  set = async (key: string, value: string) => {
    await Preferences.set({
      key: key,
      value: value,
    });
  };

  get = async (key: string) => {
    const value = await Preferences.get({ key: key });
    return value;
  };

  getAll = async () => {
    const keys = await Preferences.keys();
    const result: { [key: string]: any } = {};
    for (const key of keys.keys) {
      const value = await Preferences.get({ key: key });
      result[key] = value.value;
    }
    return result;
  };

  remove = async (key: string) => {
    await Preferences.remove({ key: key });
  };
}
