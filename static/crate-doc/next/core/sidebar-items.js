window.SIDEBAR_ITEMS = {"enum":[["ApiError","Errors that may occur when using the TAPLE API"],["CreateRequest","Specification of the different types of available requests"],["DigestDerivator","Enumeration with digest derivator types"],["KeyDerivator","Enumeration with key derivator types"],["Notification","Notifications generated by [NotificationHandler]. These notifications identify the type of message and its content. In addition, the message is accompanied by the data used to construct the message, so that it can be used to construct customized messages."]],"mod":[["error","Possible errors of a TAPLE Node"],["event_content","Contains the data structures related to the content of TAPLE events."],["event_request","Contains the data structures related to event requests."],["identifier","Identifiers module"],["signature","Define the data structures related to signatures"]],"struct":[["CreateType","Request for a Create type event "],["DatabaseSettings","Configuration parameters of the database"],["Event","Event associated to a subject."],["ExternalEventRequest","Data structure of a externa event request"],["ExternalEventRequestBody",""],["NetworkSettings","P2P network configuration parameters of a TAPLE node."],["NodeAPI","Object that allows interaction with a TAPLE node."],["NodeSettings","General settings of a TAPLE node."],["NotificationHandler","Object that allows receiving notifications of the different events of relevance that a node performs and/or detects."],["SignatureRequest","Signature of a external event request"],["SignatureRequestContent","Content of the signature of a external event request"],["StateRequestBody",""],["StateRequestBodyUpper",""],["StateType","Request for a State type event"],["SubjectData","TAPLE protocol subject data structure"],["Taple","Structure representing a node of a TAPLE network."],["TapleSettings","Configuration parameters of a TAPLE node divided into categories."]],"trait":[["ApiModuleInterface","Trait that allows implementing the interface of a TAPLE node. The only native implementation is [NodeAPI]. Users can use the trait to add specific behaviors to an existing node interface. For example, a [NodeAPI] wrapper could be created that again implements the trait and perform certain intermediate operations, such as incrementing a counter to find out how many API queries have been made."]]};