import type { MapMutator } from '../../io/jsonwebtoken/lang/MapMutator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface HeaderMutator<T extends HeaderMutator<T>> extends MapMutator<string, Object, T>, Object{
    contentType(arg0: string): T;
    setCompressionAlgorithm(arg0: string): T;
    setContentType(arg0: string): T;
    setType(arg0: string): T;
    type(arg0: string): T;
}