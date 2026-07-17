import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractSerializer } from '../../../../io/jsonwebtoken/io/AbstractSerializer.d.ts'
import type { Serializer } from '../../../../io/jsonwebtoken/io/Serializer.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NamedSerializer extends AbstractSerializer<JavaMap<string, Object | null>> {
    constructor(arg0: string, arg1: Serializer<JavaMap<string, Object | null>>)
    // private DELEGATE: Serializer<JavaMap<string, Object | null>>;
    // private name: string;
    doSerialize(arg0: JavaMap<string, Object | null>, arg1: OutputStream): void;
}