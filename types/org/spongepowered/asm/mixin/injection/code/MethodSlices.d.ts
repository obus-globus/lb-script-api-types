import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MethodSlice } from '../../../../../../org/spongepowered/asm/mixin/injection/code/MethodSlice.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
export class MethodSlices extends Object {
    static parse(paramarg0: InjectionInfo): MethodSlices;
    private constructor(arg0: InjectionInfo)
    // private info: InjectionInfo;
    // private slices: { [key: string]: MethodSlice };
    // private add(arg0: MethodSlice): void;
    get(arg0: string): MethodSlice;
    postInject(): void;
    toString(): string;
}