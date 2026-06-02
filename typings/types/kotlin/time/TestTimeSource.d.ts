import type { AbstractLongTimeSource } from '../../kotlin/time/AbstractLongTimeSource.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
import type { TimeSource$Companion } from '../../kotlin/time/TimeSource$Companion.d.ts'
export class TestTimeSource extends AbstractLongTimeSource {
    static Companion: TimeSource$Companion;
    constructor()
    // private reading: number;
    // private overflow(duration: Duration): void;
    plusAssign(duration: Duration): void;
    protected read(): number;
}