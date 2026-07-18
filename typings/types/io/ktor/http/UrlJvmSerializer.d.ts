import type { Url } from '../../../io/ktor/http/Url.d.ts'
import type { JvmSerializer } from '../../../io/ktor/utils/io/JvmSerializer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class UrlJvmSerializer extends Object implements JvmSerializer<Url> {
    static INSTANCE: UrlJvmSerializer;
    jvmDeserialize(value: number[]): Url;
    jvmSerialize(value: Url): number[];
}