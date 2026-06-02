import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CefApp } from '../../../../../org/cef/CefApp.d.ts'
import type { CefClient } from '../../../../../org/cef/CefClient.d.ts'
export class CefHelper extends Object {
    static getCefApp(): CefApp;
    static getCefClient(): CefClient;
    static init(): boolean;
    static isInitialized(): boolean;
    static shutdown(): void;
    private constructor()
}