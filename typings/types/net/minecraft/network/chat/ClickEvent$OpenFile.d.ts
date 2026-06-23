import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClickEvent } from '../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { ClickEvent$Action } from '../../../../net/minecraft/network/chat/ClickEvent$Action.d.ts'
export class ClickEvent$OpenFile extends Record implements ClickEvent {
    static CODEC: Codec<ClickEvent>;
    static CODEC: MapCodec<ClickEvent$OpenFile>;
    constructor(file: File)
    constructor(path: Path[])
    constructor(path: string)
    // private path: string;
    action(): ClickEvent$Action;
    equals(o: Object | null): boolean;
    file(): File;
    hashCode(): number;
    path(): string;
    toString(): string;
}