import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlendMode } from '../../../../../net/irisshaders/iris/gl/blending/BlendMode.d.ts'
export class BufferBlendInformation extends Record {
    // private blendMode: BlendMode;
    // private index: number;
    blendMode(): BlendMode;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    index(): number;
    toString(): string;
}