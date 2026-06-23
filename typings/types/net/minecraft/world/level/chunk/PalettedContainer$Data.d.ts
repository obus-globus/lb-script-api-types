import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { BitStorage } from '../../../../../net/minecraft/util/BitStorage.d.ts'
import type { Configuration } from '../../../../../net/minecraft/world/level/chunk/Configuration.d.ts'
import type { Palette } from '../../../../../net/minecraft/world/level/chunk/Palette.d.ts'
export class PalettedContainer$Data<T extends unknown> extends Record {
    constructor(configuration: Configuration, storage: BitStorage, palette: Palette<T>)
    // private configuration: Configuration;
    // private palette: Palette<T>;
    // private storage: BitStorage;
    configuration(): Configuration;
    copy(): PalettedContainer$Data<T>;
    copyFrom(oldPalette: Palette<T>, oldStorage: BitStorage): void;
    equals(o: Object | null): boolean;
    getSerializedSize(globalMap: T[]): number;
    hashCode(): number;
    palette(): Palette<T>;
    storage(): BitStorage;
    toString(): string;
    write(buffer: FriendlyByteBuf, globalMap: T[]): void;
}