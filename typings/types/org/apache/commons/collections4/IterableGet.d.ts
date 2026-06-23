import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Get } from '../../../../org/apache/commons/collections4/Get.d.ts'
import type { MapIterator } from '../../../../org/apache/commons/collections4/MapIterator.d.ts'
export interface IterableGet<K extends unknown, V extends unknown> extends Object, Get<K, V>{
    mapIterator(): MapIterator<K, V>;
}