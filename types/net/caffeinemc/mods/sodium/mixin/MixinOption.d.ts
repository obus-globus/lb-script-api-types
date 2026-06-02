import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MixinOption extends Object {
    constructor(arg0: string, arg1: boolean, arg2: boolean)
    readonly enabled: boolean;
    readonly modDefined: string[];
    readonly name: string;
    readonly userDefined: boolean;
    addModOverride(arg0: boolean, arg1: string): void;
    clearModsDefiningValue(): void;
    getDefiningMods(): E[];
    getName(): string;
    isEnabled(): boolean;
    isModDefined(): boolean;
    isOverridden(): boolean;
    isUserDefined(): boolean;
    setEnabled(arg0: boolean, arg1: boolean): void;
}