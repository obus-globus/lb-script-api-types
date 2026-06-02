import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefApp$CefAppState } from '../../../org/cef/CefApp$CefAppState.d.ts'
import type { CefCommandLine } from '../../../org/cef/callback/CefCommandLine.d.ts'
import type { CefSchemeRegistrar } from '../../../org/cef/callback/CefSchemeRegistrar.d.ts'
import type { CefAppHandler } from '../../../org/cef/handler/CefAppHandler.d.ts'
export abstract class CefAppHandlerAdapter extends Object implements CefAppHandler {
    constructor(arg0: string[])
    // private args_: string[];
    onAlreadyRunningAppRelaunch(arg0: CefCommandLine, arg1: string): boolean;
    onBeforeCommandLineProcessing(arg0: string, arg1: CefCommandLine): void;
    onBeforeTerminate(): boolean;
    onContextInitialized(): void;
    onRegisterCustomSchemes(arg0: CefSchemeRegistrar): void;
    onScheduleMessagePumpWork(arg0: number): void;
    stateHasChanged(arg0: CefApp$CefAppState): void;
}