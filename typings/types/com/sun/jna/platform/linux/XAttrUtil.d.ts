import type { Memory } from '../../../../../com/sun/jna/Memory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class XAttrUtil extends Object {
    static fGetXAttr(paramarg0: number, paramarg1: string): string;
    static fGetXAttr(paramarg0: number, paramarg1: string, paramarg2: string): string;
    static fGetXAttrAsMemory(paramarg0: number, paramarg1: string): Memory;
    static fGetXAttrBytes(paramarg0: number, paramarg1: string): number[];
    static fListXAttr(paramarg0: number): E[];
    static fListXAttr(paramarg0: number, paramarg1: string): E[];
    static fRemoveXAttr(paramarg0: number, paramarg1: string): void;
    static fSetXAttr(paramarg0: number, paramarg1: string, paramarg2: number[]): void;
    static fSetXAttr(paramarg0: number, paramarg1: string, paramarg2: string): void;
    static fSetXAttr(paramarg0: number, paramarg1: string, paramarg2: string, paramarg3: string): void;
    static getXAttr(paramarg0: string, paramarg1: string): string;
    static getXAttr(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static getXAttrAsMemory(paramarg0: string, paramarg1: string): Memory;
    static getXAttrBytes(paramarg0: string, paramarg1: string): number[];
    static lGetXAttr(paramarg0: string, paramarg1: string): string;
    static lGetXAttr(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static lGetXAttrAsMemory(paramarg0: string, paramarg1: string): Memory;
    static lGetXAttrBytes(paramarg0: string, paramarg1: string): number[];
    static lListXAttr(paramarg0: string): E[];
    static lListXAttr(paramarg0: string, paramarg1: string): E[];
    static lRemoveXAttr(paramarg0: string, paramarg1: string): void;
    static lSetXAttr(paramarg0: string, paramarg1: string, paramarg2: number[]): void;
    static lSetXAttr(paramarg0: string, paramarg1: string, paramarg2: string): void;
    static lSetXAttr(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string): void;
    static listXAttr(paramarg0: string): E[];
    static listXAttr(paramarg0: string, paramarg1: string): E[];
    static removeXAttr(paramarg0: string, paramarg1: string): void;
    static setXAttr(paramarg0: string, paramarg1: string, paramarg2: number[]): void;
    static setXAttr(paramarg0: string, paramarg1: string, paramarg2: string): void;
    static setXAttr(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string): void;
    private constructor()
}