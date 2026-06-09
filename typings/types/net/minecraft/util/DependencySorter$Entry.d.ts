import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DependencySorter$Entry<K extends Object | number | string | boolean> extends Object {
    visitOptionalDependencies(output: (param0: K) => void): void;
    visitRequiredDependencies(output: (param0: K) => void): void;
}