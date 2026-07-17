import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ReportedException } from '../../../../../../../net/minecraft/ReportedException.d.ts'
import type { FriendlyByteBuf } from '../../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { Palette } from '../../../../../../../net/minecraft/world/level/chunk/Palette.d.ts'
import type { PaletteResize } from '../../../../../../../net/minecraft/world/level/chunk/PaletteResize.d.ts'
export class LithiumHashPalette<T extends unknown> extends Object implements Palette<T> {
    static create<A extends unknown>(paramarg0: number, paramarg1: A[]): Palette<A>;
    constructor(arg0: number)
    constructor(arg0: number, arg1: T[])
    // private entries: T[];
    // private indexBits: number;
    readonly size: number;
    // private table: JavaMap<any, any>;
    // private addEntry(arg0: T): number;
    // private clear(): void;
    // private computeEntry(arg0: T, arg1: PaletteResize<T>): number;
    copy(): Palette<T>;
    getElements(): T[];
    getSerializedSize(arg0: T[]): number;
    getSize(): number;
    idFor(arg0: T, arg1: PaletteResize<T>): number;
    maybeHas(arg0: (param0: T) => boolean): boolean;
    // private missingPaletteEntryCrash(arg0: number): ReportedException;
    read(arg0: FriendlyByteBuf, arg1: T[]): void;
    // private recoverMissingPaletteEntryOrCrash(arg0: number): T;
    // private resize(arg0: number): void;
    valueFor(arg0: number): T;
    write(arg0: FriendlyByteBuf, arg1: T[]): void;
}