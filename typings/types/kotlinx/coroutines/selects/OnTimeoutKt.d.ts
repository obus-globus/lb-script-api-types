import type { Object } from '../../../java/lang/Object.d.ts'
import type { Duration } from '../../../kotlin/time/Duration.d.ts'
import type { SelectBuilder } from '../../../kotlinx/coroutines/selects/SelectBuilder.d.ts'
export class OnTimeoutKt extends Object {
    static onTimeout<R extends unknown>(self: SelectBuilder<R>, timeMillis: number, block: () => R): void;
// (invalid TS: name contains '-')     static onTimeout-8Mi8wO0<R extends unknown>(self: SelectBuilder<R>, timeout: Duration, block: () => R): void;
}