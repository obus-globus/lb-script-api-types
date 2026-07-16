import type { Object } from '../../../../java/lang/Object.d.ts'
export class EndpointPair$Unordered<N extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static ordered<N extends unknown>(paramsource: N, paramtarget: N): N[];
    static unordered<N extends unknown>(paramnodeU: N, paramnodeV: N): N[];
}