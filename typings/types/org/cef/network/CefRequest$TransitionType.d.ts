import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { CefRequest$TransitionFlags } from '../../../org/cef/network/CefRequest$TransitionFlags.d.ts'
export class CefRequest$TransitionType extends Enum<CefRequest$TransitionType> {
    static TT_AUTO_SUBFRAME: CefRequest$TransitionType;
    static TT_EXPLICIT: CefRequest$TransitionType;
    static TT_FORM_SUBMIT: CefRequest$TransitionType;
    static TT_LINK: CefRequest$TransitionType;
    static TT_MANUAL_SUBFRAME: CefRequest$TransitionType;
    static TT_RELOAD: CefRequest$TransitionType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CefRequest$TransitionType;
    static values(): CefRequest$TransitionType[];
    private constructor(arg2: number)
    readonly value: number;
    addQualifier(arg0: CefRequest$TransitionFlags): void;
    addQualifiers(arg0: number): void;
    getQualifiers(): number;
    getSource(): number;
    getValue(): number;
    isRedirect(): boolean;
    isSet(arg0: CefRequest$TransitionFlags): boolean;
    removeQualifier(arg0: CefRequest$TransitionFlags): void;
    name(): "TT_LINK" | "TT_EXPLICIT" | "TT_AUTO_SUBFRAME" | "TT_MANUAL_SUBFRAME" | "TT_FORM_SUBMIT" | "TT_RELOAD";
}