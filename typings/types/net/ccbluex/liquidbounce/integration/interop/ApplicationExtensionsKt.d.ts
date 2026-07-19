import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Application } from '../../../../../io/ktor/server/application/Application.d.ts'
import type { PluginInstance } from '../../../../../io/ktor/server/application/PluginInstance.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ApplicationExtensionsKt extends Object {
    static installCors(self: Application): PluginInstance;
    static installGson(self: Application, gson: Gson): PluginInstance;
    static isLocalOrigin(origin: string): boolean;
}