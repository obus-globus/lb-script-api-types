import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ATNDeserializationOptions extends Object {
    static getDefaultOptions(): ATNDeserializationOptions;
    constructor()
    constructor(arg0: ATNDeserializationOptions)
    readonly generateRuleBypassTransitions: boolean;
    readonly readOnly: boolean;
    readonly verifyATN: boolean;
    isGenerateRuleBypassTransitions(): boolean;
    isReadOnly(): boolean;
    isVerifyATN(): boolean;
    makeReadOnly(): void;
    setGenerateRuleBypassTransitions(arg0: boolean): void;
    setVerifyATN(arg0: boolean): void;
    throwIfReadOnly(): void;
}