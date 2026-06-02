import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface SocketOption<T extends Object | number | string | boolean> extends Object{
    name(): string;
    type(): Class<T>;
}