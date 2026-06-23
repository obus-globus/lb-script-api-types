import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PacketContext$Key } from '../../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext$Key.d.ts'
import type { PacketContext$ReadKey } from '../../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext$ReadKey.d.ts'
export interface PacketContext extends Object{
    get<T extends unknown>(arg0: PacketContext$ReadKey<T>): T;
    orElse<T extends unknown>(arg0: PacketContext$ReadKey<T>, arg1: T): T;
    orElseThrow<T extends unknown>(arg0: PacketContext$ReadKey<T>): T;
    set<T extends unknown>(arg0: PacketContext$Key<T>, arg1: T): void;
}