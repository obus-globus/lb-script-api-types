import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Handle } from '../../../../org/objectweb/asm/Handle.d.ts'
export class Handles extends Object {
    static isField(paramarg0: Handle): boolean;
    static opcodeFromTag(paramarg0: number): number;
    static tagFromOpcode(paramarg0: number): number;
    private constructor()
}