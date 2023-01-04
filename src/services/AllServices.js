// @GET("article/get_articles_list")
// fun getArticles(): Observable<ArticleResponse>
//
// @FormUrlEncoded
// @POST("/api/transport/FirstLoginDriver")
// fun loginUser(@Field("driver_user") driver_user: String, @Field("driver_pass") driver_pass: String, @Field("driver_phone") driver_phone: String): Observable<LoginResponse>
//
// @GET("/api/transport/getsmscode/{phone}")
// fun loginUser2(@Path("phone") phone: String?): Observable<LoginResponse>
//
// @FormUrlEncoded
// @POST("/api/transport/WithDrawAccount")
// fun requestTasvie(@Field("DriverId") DriverId : String, @Field("Amount") Amount : String): Observable<SimpleModel>
//
// @POST("/api/transport/SetFriendReferCode/{driverid}/{refercode}/")
// fun setFriendReferCode(@Path("driverid") driverid: String?,@Path("refercode") refercode: String?): Observable<PublicResp>
//
// @GET("/api/transport/GetDriverTariffList")
// fun getTarefeha(): Observable<List<TarefeModel>>
//
// @FormUrlEncoded

// @POST("/api/transport/GetDriverInfo")
// fun getDriverInfo(@Field("driver_id") driver_id: String?): Observable<DriverInfo>
//
//
// @GET("/api/transport/checksmscode/{phone}/{code}")
// fun checkCode(@Path("phone") phone: String?,@Path("code") code: String?): Observable<DriverInfo>
//
// @GET("/api/transport/GetAllVehivleSubTypes/{vehicle_id}")
// fun getAllVehivleSubTypes(@Path("vehicle_id") vehicle_id: String?): Observable<Barkesh>
//
//
// @FormUrlEncoded
// @POST("/api/transport/GetDriverNotificationToken")
// fun setDriverNotificationToken(@Field("driverId") driver_id: String?,
// @Field("token") token: String?): Observable<SimpleModel>
//
//
// @POST("/api/transport/UpdateProfile")
// fun UpdateProfile(@Body info:DriverInfo): Observable<SimpleModel>
//
//
// @GET("/api/transport/Checkupdate/{version_name}/")
// fun checkupdate(@Path("version_name") version_name: String?): Observable<String>
//
// @GET("/api/transport/AccountOwnerFromSheba/{sheba}")
// fun accountOwnerFromSheba(@Path("sheba") sheba: String?): Observable<SimpleModel>
//
// @FormUrlEncoded
// @POST("/api/transport/DriverChargeList2")
// fun getDriverChargeList(@Field("driver_id") driver_id: String?): Observable<List<Gardesh>>
//
//
// @GET("/api/transport/GetAllPayloadsios/{driver_id}/{lat}/{lng}/")
// fun getPayloadsList(@Path("driver_id") driver_id: String?,
// @Path("lat") lat: String?,
// @Path("lng") lng: String?): Observable<List<Bar>>
//
//
// @GET("/api/transport/GetAllTransaction/{driver_id}/{fromDate}/{toDate}/")
// fun getSavabegh(@Path("driver_id") driver_id: String?,
// @Path("fromDate") fromDate: String?,
// @Path("toDate") toDate: String?): Observable<List<Sabeghe>>
//
//
// @GET("/api/transport/GetAllPayloadsWithFilter/{vehicle}/{weight}")
// fun getAllPayloads(@Path("vehicle") vehicle: String?,
// @Path("weight") weight: String?): Observable<List<Bar>>
//
//
// @GET("/api/transport/GetDriverNotifications/{driver_id}")
// fun getElans(@Path("driver_id") driver_id: String?): Observable<List<Elan>>
//
//
// @GET("/api/transport/ListAdminMessage")
// fun getMessages(): Observable<List<Payam>>
//
// @GET("/api/transport/GetRssFeeds")
// fun getNews(): Observable<News>
//
//
// @GET("/api/transport/checkupdatenew/{version}")
// fun getUpdate(@Path("version") version: String): Observable<Update>
//
//
// @GET("/api/transport/GetPaylaodsOfDriverios/{driver_id}")
// fun getDriverPayloadsList(@Path("driver_id") driver_id: String?): Observable<List<Bar>>
//
// @GET("/api/transport/GetListElamBarVizheh/{driver_id}")
// fun getListElamBarVizheh(@Path("driver_id") driver_id: String?): Observable<List<VizheModel>>
//
// @GET("/api/transport/Getstatecities")
// fun getAllCities(): Observable<List<State>>
//
// @GET("/api/transport/GetPaylaodsByCityios/{driver_id}/{city_id}")
// fun getPaylaodsByCity(@Path("driver_id") driver_id: String?,
// @Path("city_id") city_id: String?): Observable<List<Bar>>
//
// @GET("/api/transport/CancelElamBarVizhehTurning/{driver_id}/{turn_id}")
// fun cancelElamBarVizhehTurning(@Path("driver_id") driver_id: String?,
// @Path("turn_id") turn_id: String?): Observable<PublicResp>
//
// @GET("/api/transport/CheckDriverTurnOnCities/{driver_id}")
// fun getDriverTurnOnCities(@Path("driver_id") driver_id: String?): Observable<Array<Array<String>>>
//
// @GET("/api/transport/CheckDriverElamBarTurn/{driver_id}")
// fun getDriverTurnOnElamBarOmumi(@Path("driver_id") driver_id: String?): Observable<PublicElamBarTurn>
//
// @GET("/api/transport/CancelTurnOnCities/{driver_id}")
// fun cancelTurnOnCities(@Path("driver_id") driver_id: String?): Observable<PublicResp>
//
//
// @GET("/api/transport/CancelElamBarTurning/{driver_id}")
// fun cancelElamBarTurning(@Path("driver_id") driver_id: String?): Observable<PublicResp>
//
//
// @GET("/api/transport/GetCitiesOfCoordination/{lat}/{lng}/")
// fun getCitiesOfCoordination(@Path("lat") lat: String?,@Path("lng") lng: String?): Observable<State>
//
//
// @GET("/api/transport/GetCitiesOfCoordinationForElamBar/{lat}/{lng}/")
// fun getCitiesOfCoordinationForElamBar(@Path("lat") lat: String?,@Path("lng") lng: String?): Observable<ElamBarPublic>
//
// @FormUrlEncoded
// @POST("/api/transport/TurningDriverOnCities")
// fun turningDriverOnCities(@Field("DriverId") driver_id: String?,
// @Field("SrcCityId") SrcCityId: String?,
// @Field("City1Id") City1Id: String?,
// @Field("City2Id") City2Id: String?,
// @Field("City3Id") City3Id: String?): Observable<TurnResponse>
//
//
// @FormUrlEncoded
// @POST("/api/transport/ElamBarTurning")
// fun elamBarTurning(@Field("DriverId") driver_id: String?,
// @Field("SrcCityId") SrcCityId: String?,
// @Field("DesCityId1") City1Id: String?,
// @Field("DesCityId2") City2Id: String?,
// @Field("DesCityId3") City3Id: String?,
// @Field("PayloadType1") PayloadType1: String?,
// @Field("PayloadType2") PayloadType2: String?,
// @Field("PayloadType3") PayloadType3: String?): Observable<TurnResponse>
//
//
// @GET("/api/transport/DeliveryToDestinationByDriver/{bar_id}/{driver_id}")
// fun delivery(@Path("bar_id") bar_id: String?,@Path("driver_id") driver_id: String?): Observable<PublicResp>
//
//
//
//
// @FormUrlEncoded
// @POST("/api/transport/RegisterSupport")
// fun sendMsgToPoshtibani(@Field("driver_id") driver_id: String?,
// @Field("title") title: String?,
// @Field("question") question: String?): Observable<PublicResp>
//
// @FormUrlEncoded
// @POST("/api/transport/RegisterComment")
// fun sendMsgToEntegadat(@Field("driver_id") driver_id: String?,
// @Field("subject") title: String?,
// @Field("comment") question: String?): Observable<PublicResp>
//
//
// @FormUrlEncoded
// @POST("/api/transport/GetDriverReport")
// fun getDriverReport(@Field("DriverId") driver_id: String?,
// @Field("From") From: String?,
// @Field("To") To: String?): Observable<GozareshReport>
//
//
//
//
// @FormUrlEncoded
// @POST("/api/transport/ReservePayload")
// fun reservePayload(@Field("DriverId") driver_id: String?,
// @Field("PayloadId") PayloadId: String?,
// @Field("Reserve") Reserve: String?,
// @Field("Latitude") Latitude: String?,
// @Field("Longitude") Longitude: String?): Observable<PublicResp>
//
// @FormUrlEncoded
// @POST("/api/transport/ElamBarVizhehTurning")
// fun elamBarVizhehTurning(@Field("DriverId") driver_id: String?,
// @Field("OfficeId") PayloadId: String?): Observable<PublicResp>
//
//
//
// @FormUrlEncoded
// @POST("functions.php")
// fun registerUser(@Field("username") username: String,@Field("password") password: String,@Field("email") email: String,@Field("action_android") action_android: String): Observable<RegisterResponse>
//
// @FormUrlEncoded
// @POST("functions.php")
// fun getServices(@Field("action_android") action_android: String): Observable<List<Service>>
//
// @FormUrlEncoded
// @POST("functions.php")
// fun addOrder(@Field("id") id: String,@Field("link") link: String,@Field("action_android") action_android: String): Observable<RegisterResponse>
//
// @FormUrlEncoded
// @POST("functions.php")
// fun getHistory(@Field("action_android") action_android: String): Observable<List<History>>
//
// @FormUrlEncoded
// @POST("functions.php")
// fun getStatus(@Field("id") id: String,@Field("action_android") action_android: String): Observable<Status>
//
// @FormUrlEncoded
// @POST("functions.php")
// fun getPayPlans(@Field("action_android") action_android: String): Observable<List<PayPlan>>