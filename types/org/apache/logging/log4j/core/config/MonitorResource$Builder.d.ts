import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MonitorResource } from '../../../../../../org/apache/logging/log4j/core/config/MonitorResource.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class MonitorResource$Builder extends Object implements Builder<MonitorResource> {
    constructor()
    // private uri: URI;
    build(): MonitorResource;
    getErrorPrefix(): string;
    isValid(): boolean;
    setUri(uri: URI): MonitorResource$Builder;
}