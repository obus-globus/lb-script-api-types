import type { Buffer } from '../../../com/jcraft/jogg/Buffer.d.ts'
import type { Block } from '../../../com/jcraft/jorbis/Block.d.ts'
import type { DspState } from '../../../com/jcraft/jorbis/DspState.d.ts'
import type { FuncResidue } from '../../../com/jcraft/jorbis/FuncResidue.d.ts'
import type { Info } from '../../../com/jcraft/jorbis/Info.d.ts'
import type { InfoMode } from '../../../com/jcraft/jorbis/InfoMode.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Residue0 extends FuncResidue {
    static residue_P: FuncResidue[];
    constructor()
    free_info(arg0: Object): void;
    free_look(arg0: Object): void;
    inverse(arg0: Block, arg1: Object, arg2: number[][], arg3: number[], arg4: number): number;
    look(arg0: DspState, arg1: InfoMode, arg2: Object): Object;
    pack(arg0: Object, arg1: Buffer): void;
    unpack(arg0: Info, arg1: Buffer): Object;
}