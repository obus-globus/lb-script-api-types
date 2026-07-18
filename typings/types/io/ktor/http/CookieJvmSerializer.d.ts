import type { Cookie } from '../../../io/ktor/http/Cookie.d.ts'
import type { JvmSerializer } from '../../../io/ktor/utils/io/JvmSerializer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CookieJvmSerializer extends Object implements JvmSerializer<Cookie> {
    static INSTANCE: CookieJvmSerializer;
    jvmDeserialize(value: number[]): Cookie;
    jvmSerialize(value: Cookie): number[];
}