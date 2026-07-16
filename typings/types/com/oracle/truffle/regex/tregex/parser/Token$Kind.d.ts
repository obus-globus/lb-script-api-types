import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Token$Kind extends Enum<Token$Kind> {
    static A: Token$Kind;
    static Z: Token$Kind;
    static alternation: Token$Kind;
    static atomicGroupBegin: Token$Kind;
    static backReference: Token$Kind;
    static captureGroupBegin: Token$Kind;
    static caret: Token$Kind;
    static charClass: Token$Kind;
    static charClassAtom: Token$Kind;
    static charClassBegin: Token$Kind;
    static charClassEnd: Token$Kind;
    static classSet: Token$Kind;
    static conditionalBackreference: Token$Kind;
    static dollar: Token$Kind;
    static groupEnd: Token$Kind;
    static inlineFlags: Token$Kind;
    static linebreak: Token$Kind;
    static literalChar: Token$Kind;
    static literalString: Token$Kind;
    static lookAheadAssertionBegin: Token$Kind;
    static lookBehindAssertionBegin: Token$Kind;
    static nonCaptureGroupBegin: Token$Kind;
    static nonWordBoundary: Token$Kind;
    static quantifier: Token$Kind;
    static wordBoundary: Token$Kind;
    static z: Token$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Token$Kind;
    static values(): Token$Kind[];
    private constructor()
    name(): "A" | "Z" | "z" | "caret" | "dollar" | "linebreak" | "wordBoundary" | "nonWordBoundary" | "backReference" | "quantifier" | "alternation" | "captureGroupBegin" | "nonCaptureGroupBegin" | "atomicGroupBegin" | "lookAheadAssertionBegin" | "lookBehindAssertionBegin" | "groupEnd" | "literalChar" | "literalString" | "charClass" | "charClassBegin" | "charClassAtom" | "charClassEnd" | "classSet" | "inlineFlags" | "conditionalBackreference";
}