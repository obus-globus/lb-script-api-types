import type { Object } from '../../../java/lang/Object.d.ts'
export interface CefCommandLine extends Object{
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
}