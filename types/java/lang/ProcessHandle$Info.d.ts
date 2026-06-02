import type { Duration } from '../../java/time/Duration.d.ts'
import type { Instant } from '../../java/time/Instant.d.ts'
import type { Optional } from '../../java/util/Optional.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ProcessHandle$Info extends Object{
    arguments(): Optional<string[]>;
    command(): Optional<string>;
    commandLine(): Optional<string>;
    startInstant(): Optional<Instant>;
    totalCpuDuration(): Optional<Duration>;
    user(): Optional<string>;
}