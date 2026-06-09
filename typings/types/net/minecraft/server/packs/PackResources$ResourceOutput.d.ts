import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { IoSupplier } from '../../../../net/minecraft/server/packs/resources/IoSupplier.d.ts'
export interface PackResources$ResourceOutput extends BiConsumer<Identifier, () => InputStream>, Object {
    andThen(arg0: (param0: T, param1: U) => void): (param0: T, param1: U) => void;
}