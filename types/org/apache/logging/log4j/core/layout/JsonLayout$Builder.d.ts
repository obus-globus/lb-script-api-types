import type { AbstractJacksonLayout$Builder } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractJacksonLayout$Builder.d.ts'
import type { JsonLayout } from '../../../../../../org/apache/logging/log4j/core/layout/JsonLayout.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
import type { KeyValuePair } from '../../../../../../org/apache/logging/log4j/core/util/KeyValuePair.d.ts'
export class JsonLayout$Builder<B extends JsonLayout$Builder<B>> extends AbstractJacksonLayout$Builder<B> implements Builder<JsonLayout> {
    constructor()
    readonly additionalFields: KeyValuePair[];
    readonly objectMessageAsJsonObject: boolean;
    readonly propertiesAsList: boolean;
    build(): JsonLayout;
    getAdditionalFields(): KeyValuePair[];
    getErrorPrefix(): string;
    getObjectMessageAsJsonObject(): boolean;
    isPropertiesAsList(): boolean;
    isValid(): boolean;
    setAdditionalFields(additionalFields: KeyValuePair[]): B;
    setObjectMessageAsJsonObject(objectMessageAsJsonObject: boolean): B;
    setPropertiesAsList(propertiesAsList: boolean): B;
}