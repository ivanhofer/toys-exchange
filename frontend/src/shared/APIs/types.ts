/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: operations["AppController_getHello"];
  };
  "/user/sign-up": {
    post: operations["UserController_signupUser"];
  };
  "/user/users": {
    post: operations["UserController_getUsers"];
  };
  "/user/user": {
    post: operations["UserController_getUserById"];
  };
  "/user/image/{userId}": {
    post: operations["UserController_changeUserImage"];
  };
  "/user/rate": {
    post: operations["UserController_rateUser"];
  };
  "/user/editByAdmin": {
    post: operations["UserController_editUserById"];
  };
  "/user/edit": {
    post: operations["UserController_editUserByID"];
  };
  "/user/block": {
    post: operations["UserController_blockClient"];
  };
  "/user/activate": {
    post: operations["UserController_activateClient"];
  };
  "/auth/login": {
    post: operations["AuthController_login"];
  };
  "/auth/protected": {
    get: operations["AuthController_protectedRoute"];
  };
  "/auth/test": {
    post: operations["AuthController_getTest"];
  };
  "/toy/create-toy": {
    post: operations["ToysController_createToy"];
  };
  "/toy/toys": {
    post: operations["ToysController_getToys"];
  };
  "/toy/edit": {
    post: operations["ToysController_editToy"];
  };
  "/toy/toy": {
    post: operations["ToysController_getToy"];
  };
  "/toy/user-toys": {
    post: operations["ToysController_getUserToys"];
  };
  "/offer/offers": {
    post: operations["OfferController_getOffers"];
  };
  "/offer/active-offers": {
    post: operations["OfferController_getActiveOffers"];
  };
  "/offer/history-offers": {
    post: operations["OfferController_getHistoryOffers"];
  };
  "/offer/send": {
    post: operations["OfferController_sendOffer"];
  };
  "/offer/decline": {
    post: operations["OfferController_declineOffer"];
  };
  "/offer/accept": {
    post: operations["OfferController_acceptOffer"];
  };
}

export interface components {
  schemas: {
    RegisterUserDto: {
      role?: "BASIC" | "ADMIN";
      email: string;
      name: string;
      password: string;
      phoneNumber: string;
    };
    BasicUserDto: {
      role: "BASIC" | "ADMIN";
      status: "ACTIVE" | "BLOCKED";
      id: string;
      email: string;
      name: string;
      phoneNumber: string;
      imgUrl: string | null;
      createdAt: string;
      updatedAt: string;
    };
    Rating: {
      value: number | null;
      count: number;
    };
    Owner: {
      name: string;
      imgUrl: string | null;
      rating: components["schemas"]["Rating"];
    };
    ToyDto: {
      category:
        | "FIGURES"
        | "ANIMALS"
        | "CARS"
        | "RADIO_CONTROLLED"
        | "CONSTRUCTION"
        | "CREATIVE"
        | "DOLLS"
        | "EDUCATIONAL"
        | "ELECTRONIC"
        | "EXECUTIVE"
        | "FOOD_RELATED"
        | "GAMES"
        | "PLAYGOUND"
        | "PUZZLE"
        | "LEGO"
        | "SCIENCE"
        | "SOUND"
        | "SPINNING"
        | "WOODEN"
        | "OTHER";
      id: string;
      name: string;
      imgUrl: string;
      description: string;
      ownerId: string;
      owner: components["schemas"]["Owner"];
    };
    UserDto: {
      role: "BASIC" | "ADMIN";
      status: "ACTIVE" | "BLOCKED";
      toys: components["schemas"]["ToyDto"][];
      id: string;
      email: string;
      name: string;
      phoneNumber: string;
      imgUrl: string | null;
      address: string | null;
      createdAt: string;
      updatedAt: string;
      rating: components["schemas"]["Rating"];
    };
    UserIdDto: {
      id: string;
    };
    RateUserDto: {
      userId: string;
      offerId: string;
      value: number;
    };
    UpdateUserDto: {
      role: "BASIC" | "ADMIN";
      status: "ACTIVE" | "BLOCKED";
      id: string;
      email: string;
      name: string;
      phoneNumber: string;
      address: string | null;
    };
    UpdateUserSelfDto: {
      id: string;
      email: string;
      name: string;
      phoneNumber: string;
      address: string | null;
    };
    UserLoginDto: {
      email: string;
      password: string;
    };
    AccessTokenDto: {
      access_token: string;
    };
    BasicToyDto: {
      category:
        | "FIGURES"
        | "ANIMALS"
        | "CARS"
        | "RADIO_CONTROLLED"
        | "CONSTRUCTION"
        | "CREATIVE"
        | "DOLLS"
        | "EDUCATIONAL"
        | "ELECTRONIC"
        | "EXECUTIVE"
        | "FOOD_RELATED"
        | "GAMES"
        | "PLAYGOUND"
        | "PUZZLE"
        | "LEGO"
        | "SCIENCE"
        | "SOUND"
        | "SPINNING"
        | "WOODEN"
        | "OTHER";
      id: string;
      name: string;
      imgUrl: string;
      description: string;
      ownerId: string;
    };
    EditToyDto: {
      category:
        | "FIGURES"
        | "ANIMALS"
        | "CARS"
        | "RADIO_CONTROLLED"
        | "CONSTRUCTION"
        | "CREATIVE"
        | "DOLLS"
        | "EDUCATIONAL"
        | "ELECTRONIC"
        | "EXECUTIVE"
        | "FOOD_RELATED"
        | "GAMES"
        | "PLAYGOUND"
        | "PUZZLE"
        | "LEGO"
        | "SCIENCE"
        | "SOUND"
        | "SPINNING"
        | "WOODEN"
        | "OTHER";
      id: string;
      name: string;
      description: string;
    };
    ToyIdDto: {
      id: string;
    };
    OwnerIdDto: {
      id: string;
    };
    UserOfferDto: {
      name: string;
      imgUrl: string;
      rating: components["schemas"]["Rating"];
    };
    ToyOfferDto: {
      category:
        | "FIGURES"
        | "ANIMALS"
        | "CARS"
        | "RADIO_CONTROLLED"
        | "CONSTRUCTION"
        | "CREATIVE"
        | "DOLLS"
        | "EDUCATIONAL"
        | "ELECTRONIC"
        | "EXECUTIVE"
        | "FOOD_RELATED"
        | "GAMES"
        | "PLAYGOUND"
        | "PUZZLE"
        | "LEGO"
        | "SCIENCE"
        | "SOUND"
        | "SPINNING"
        | "WOODEN"
        | "OTHER";
      name: string;
      imgUrl: string;
    };
    RatingOfferDto: {
      id: string;
      userId: string;
      offerId: string;
      value: number;
      createdAt: string;
    };
    OfferDto: {
      status: "ACCEPTED" | "DECLINED" | "PENDING";
      id: string;
      senderUserId: string;
      receiverUserId: string;
      toyFromSenderId: string;
      toyFromReceiverId: string;
      receiver: components["schemas"]["UserOfferDto"];
      sender: components["schemas"]["UserOfferDto"];
      toyFromReceiver: components["schemas"]["ToyOfferDto"];
      toyFromSender: components["schemas"]["ToyOfferDto"];
      rating: components["schemas"]["RatingOfferDto"] | null;
      createdAt: string;
      updatedAt: string;
    };
    ReceiverIdDto: {
      receiverId: string;
    };
    SendOfferDto: {
      senderUserId: string;
      receiverUserId: string;
      toyFromSenderId: string;
      toyFromReceiverId: string;
    };
    BasicOfferDto: {
      status: "ACCEPTED" | "DECLINED" | "PENDING";
      id: string;
      senderUserId: string;
      receiverUserId: string;
      toyFromSenderId: string;
      toyFromReceiverId: string;
      createdAt: string;
    };
    OfferIdDto: {
      offerId: string;
    };
  };
}

export interface operations {
  AppController_getHello: {
    parameters: {};
    responses: {
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
  UserController_signupUser: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["BasicUserDto"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["RegisterUserDto"];
      };
    };
  };
  UserController_getUsers: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["UserDto"][];
        };
      };
    };
  };
  UserController_getUserById: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["UserDto"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserIdDto"];
      };
    };
  };
  UserController_changeUserImage: {
    parameters: {};
    responses: {
      201: unknown;
    };
  };
  UserController_rateUser: {
    parameters: {};
    responses: {
      201: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["RateUserDto"];
      };
    };
  };
  UserController_editUserById: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["BasicUserDto"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateUserDto"];
      };
    };
  };
  UserController_editUserByID: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["BasicUserDto"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateUserSelfDto"];
      };
    };
  };
  UserController_blockClient: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": { [key: string]: unknown };
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserIdDto"];
      };
    };
  };
  UserController_activateClient: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": { [key: string]: unknown };
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserIdDto"];
      };
    };
  };
  AuthController_login: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["AccessTokenDto"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserLoginDto"];
      };
    };
  };
  AuthController_protectedRoute: {
    parameters: {};
    responses: {
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
  AuthController_getTest: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["UserLoginDto"];
        };
      };
    };
  };
  ToysController_createToy: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["BasicToyDto"];
        };
      };
    };
  };
  ToysController_getToys: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["ToyDto"][];
        };
      };
    };
  };
  ToysController_editToy: {
    parameters: {};
    responses: {
      201: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["EditToyDto"];
      };
    };
  };
  ToysController_getToy: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["BasicToyDto"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ToyIdDto"];
      };
    };
  };
  ToysController_getUserToys: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["ToyDto"][];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["OwnerIdDto"];
      };
    };
  };
  OfferController_getOffers: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["OfferDto"][];
        };
      };
    };
  };
  OfferController_getActiveOffers: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["OfferDto"][];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ReceiverIdDto"];
      };
    };
  };
  OfferController_getHistoryOffers: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["OfferDto"][];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ReceiverIdDto"];
      };
    };
  };
  OfferController_sendOffer: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["BasicOfferDto"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["SendOfferDto"];
      };
    };
  };
  OfferController_declineOffer: {
    parameters: {};
    responses: {
      201: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["OfferIdDto"];
      };
    };
  };
  OfferController_acceptOffer: {
    parameters: {};
    responses: {
      201: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["OfferIdDto"];
      };
    };
  };
}

export interface external {}
