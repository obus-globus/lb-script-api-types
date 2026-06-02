import type { Connection } from '../../../../../../../../java/sql/Connection.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LifeCycle } from '../../../../../../../../org/apache/logging/log4j/core/LifeCycle.d.ts'
export interface ConnectionSource extends Object, LifeCycle{
    getConnection(): Connection;
}