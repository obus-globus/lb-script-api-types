import type { CefCommandLine } from '../../../org/cef/callback/CefCommandLine.d.ts'
import type { CefNativeAdapter } from '../../../org/cef/callback/CefNativeAdapter.d.ts'
export class CefCommandLine_N extends CefNativeAdapter implements CefCommandLine {
    constructor()
    // private N_AppendArgument(arg0: number, arg1: string): void;
    // private N_AppendSwitch(arg0: number, arg1: string): void;
    // private N_AppendSwitchWithValue(arg0: number, arg1: string, arg2: string): void;
    // private N_GetArguments(arg0: number): string[];
    // private N_GetProgram(arg0: number): string;
    // private N_GetSwitchValue(arg0: number, arg1: string): string;
    // private N_GetSwitches(arg0: number): { [key: string]: string };
    // private N_HasArguments(arg0: number): boolean;
    // private N_HasSwitch(arg0: number, arg1: string): boolean;
    // private N_HasSwitches(arg0: number): boolean;
    // private N_Reset(arg0: number): void;
    // private N_SetProgram(arg0: number, arg1: string): void;
    appendArgument(arg0: string): void;
    appendSwitch(arg0: string): void;
    appendSwitchWithValue(arg0: string, arg1: string): void;
    getArguments(): string[];
    getProgram(): string;
    getSwitchValue(arg0: string): string;
    getSwitches(): { [key: string]: string };
    hasArguments(): boolean;
    hasSwitch(arg0: string): boolean;
    hasSwitches(): boolean;
    reset(): void;
    setProgram(arg0: string): void;
    toString(): string;
}