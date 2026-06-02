import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Timer } from '../../javax/swing/Timer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CefApp$CefAppState } from '../../org/cef/CefApp$CefAppState.d.ts'
import type { CefApp$CefVersion } from '../../org/cef/CefApp$CefVersion.d.ts'
import type { CefClient } from '../../org/cef/CefClient.d.ts'
import type { CefSettings } from '../../org/cef/CefSettings.d.ts'
import type { CefSchemeHandlerFactory } from '../../org/cef/callback/CefSchemeHandlerFactory.d.ts'
import type { CefAppHandler } from '../../org/cef/handler/CefAppHandler.d.ts'
import type { CefAppHandlerAdapter } from '../../org/cef/handler/CefAppHandlerAdapter.d.ts'
export class CefApp extends CefAppHandlerAdapter {
    static addAppHandler(paramarg0: CefAppHandler): void;
    static getInstance(): CefApp;
    static getInstance(paramarg0: (Object | null)[]): CefApp;
    static getInstance(paramarg0: (Object | null)[], paramarg1: CefSettings): CefApp;
    static getInstance(paramarg0: CefSettings): CefApp;
    static getState(): CefApp$CefAppState;
    static startup(paramarg0: (Object | null)[]): boolean;
    private constructor(arg0: string[], arg1: CefSettings)
    // private clients_: CefClient[];
    macOSTerminationRequestRunnable: () => void;
    // private settings_: CefSettings;
    // private workTimer_: Timer;
    // private N_ClearSchemeHandlerFactories(): boolean;
    N_DoMessageLoopWork(): void;
    // private N_GetVersion(): CefApp$CefVersion;
    // private N_Initialize(arg0: CefAppHandler, arg1: CefSettings): boolean;
    // private N_PreInitialize(): boolean;
    // private N_RegisterSchemeHandlerFactory(arg0: string, arg1: string, arg2: CefSchemeHandlerFactory): boolean;
    // private N_Shutdown(): void;
    clearSchemeHandlerFactories(): boolean;
    clientWasDisposed(arg0: CefClient): void;
    createClient(): CefClient;
    dispose(): void;
    doMessageLoopWork(arg0: number): void;
    getVersion(): CefApp$CefVersion;
    handleBeforeTerminate(): void;
    // private initialize(): void;
    registerSchemeHandlerFactory(arg0: string, arg1: string, arg2: CefSchemeHandlerFactory): boolean;
    setSettings(arg0: CefSettings): void;
    // private shutdown(): void;
}