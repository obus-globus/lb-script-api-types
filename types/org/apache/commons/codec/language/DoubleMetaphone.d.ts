import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StringEncoder } from '../../../../../org/apache/commons/codec/StringEncoder.d.ts'
import type { DoubleMetaphone$DoubleMetaphoneResult } from '../../../../../org/apache/commons/codec/language/DoubleMetaphone$DoubleMetaphoneResult.d.ts'
export class DoubleMetaphone extends Object implements StringEncoder {
    constructor()
    readonly maxCodeLen: number;
    charAt(arg0: string, arg1: number): string;
    // private cleanInput(arg0: string): string;
    // private conditionC0(arg0: string, arg1: number): boolean;
    // private conditionCH0(arg0: string, arg1: number): boolean;
    // private conditionCH1(arg0: string, arg1: number): boolean;
    // private conditionL0(arg0: string, arg1: number): boolean;
    // private conditionM0(arg0: string, arg1: number): boolean;
    doubleMetaphone(arg0: string): string;
    doubleMetaphone(arg0: string, arg1: boolean): string;
    encode(arg0: Object): Object;
    encode(arg0: string): string;
    getMaxCodeLen(): number;
    // private handleAEIOUY(arg0: DoubleMetaphone$DoubleMetaphoneResult, arg1: number): number;
    // private handleC(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number): number;
    // private handleCC(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number): number;
    // private handleCH(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number): number;
    // private handleD(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number): number;
    // private handleG(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number, arg3: boolean): number;
    // private handleGH(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number): number;
    // private handleH(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number): number;
    // private handleJ(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number, arg3: boolean): number;
    // private handleL(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number): number;
    // private handleP(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number): number;
    // private handleR(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number, arg3: boolean): number;
    // private handleS(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number, arg3: boolean): number;
    // private handleSC(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number): number;
    // private handleT(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number): number;
    // private handleW(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number): number;
    // private handleX(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number): number;
    // private handleZ(arg0: string, arg1: DoubleMetaphone$DoubleMetaphoneResult, arg2: number, arg3: boolean): number;
    isDoubleMetaphoneEqual(arg0: string, arg1: string): boolean;
    isDoubleMetaphoneEqual(arg0: string, arg1: string, arg2: boolean): boolean;
    // private isSilentStart(arg0: string): boolean;
    // private isSlavoGermanic(arg0: string): boolean;
    // private isVowel(arg0: string): boolean;
    setMaxCodeLen(arg0: number): void;
}