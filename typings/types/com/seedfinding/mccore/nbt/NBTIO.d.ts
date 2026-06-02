import type { NBTCompound } from '../../../../com/seedfinding/mccore/nbt/tag/NBTCompound.d.ts'
import type { NBTTag } from '../../../../com/seedfinding/mccore/nbt/tag/NBTTag.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NBTIO extends Object {
    static read(paramarg0: number[]): NBTCompound;
    static read(paramarg0: File): NBTCompound;
    static read(paramarg0: string): NBTCompound;
    static write(paramarg0: NBTTag<Object>, paramarg1: File, paramarg2: boolean): void;
    static write(paramarg0: NBTTag<Object>, paramarg1: string, paramarg2: boolean): void;
    constructor()
}