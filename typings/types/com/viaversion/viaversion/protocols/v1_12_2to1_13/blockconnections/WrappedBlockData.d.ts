import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WrappedBlockData extends Object {
    static fromString(paramarg0: string): WrappedBlockData;
    private constructor(arg0: string, arg1: number)
    // private blockData: JavaMap<string, string>;
    readonly minecraftKey: string;
    readonly savedBlockStateId: number;
    getBlockStateId(): number;
    getMinecraftKey(): string;
    getSavedBlockStateId(): number;
    getValue(arg0: string): string;
    hasData(arg0: string): boolean;
    set(arg0: string, arg1: Object): WrappedBlockData;
    toString(): string;
}