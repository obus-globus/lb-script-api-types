import type { DataInput } from '../../../java/io/DataInput.d.ts'
import type { DataOutput } from '../../../java/io/DataOutput.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { NbtAccounter } from '../../../net/minecraft/nbt/NbtAccounter.d.ts'
import type { StreamTagVisitor } from '../../../net/minecraft/nbt/StreamTagVisitor.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
export class NbtIo extends Object {
    static parse(paraminput: DataInput, paramoutput: StreamTagVisitor, paramaccounter: NbtAccounter): void;
    static parseCompressed(paramin: InputStream, paramoutput: StreamTagVisitor, paramaccounter: NbtAccounter): void;
    static parseCompressed(paramfile: Path, paramoutput: StreamTagVisitor, paramaccounter: NbtAccounter): void;
    static read(paraminput: DataInput): CompoundTag;
    static read(paraminput: DataInput, paramaccounter: NbtAccounter): CompoundTag;
    static read(paramfile: Path): CompoundTag;
    static readAnyTag(paraminput: DataInput, paramaccounter: NbtAccounter): Tag;
    static readCompressed(paramin: InputStream, paramaccounter: NbtAccounter): CompoundTag;
    static readCompressed(paramfile: Path, paramaccounter: NbtAccounter): CompoundTag;
    static readUnnamedTag(paraminput: DataInput, paramaccounter: NbtAccounter): Tag;
    static write(paramtag: CompoundTag, paramoutput: DataOutput): void;
    static write(paramtag: CompoundTag, paramfile: Path): void;
    static writeAnyTag(paramtag: Tag, paramoutput: DataOutput): void;
    static writeCompressed(paramtag: CompoundTag, paramout: OutputStream): void;
    static writeCompressed(paramtag: CompoundTag, paramfile: Path): void;
    static writeUnnamedTag(paramtag: Tag, paramoutput: DataOutput): void;
    static writeUnnamedTagWithFallback(paramtag: Tag, paramoutput: DataOutput): void;
    constructor()
}