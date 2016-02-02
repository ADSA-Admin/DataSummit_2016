
// javascript for demo 1

$(function () {
   
    // read in csv data save as object
    // for now I'm using fake data from the server
    
    var data = [
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.5,
        "bids_per_auction_mean": 1.333333333,
        "n_bids": 4,
        "n_urls": 3,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1.5,
        "n_bids": 3,
        "n_urls": 1,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.25,
        "bids_per_auction_mean": 1.214285714,
        "n_bids": 17,
        "n_urls": 2,
        "result": 0.994
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.622804128,
        "on_ip_that_has_a_bot_mean": 0.310077519,
        "bids_per_auction_mean": 1.644444444,
        "n_bids": 148,
        "n_urls": 80,
        "result": 0.966
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.176470588,
        "bids_per_auction_mean": 1.15,
        "n_bids": 23,
        "n_urls": 1,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 1.167987591,
        "on_ip_that_has_a_bot_mean": 0.4,
        "bids_per_auction_mean": 2.416666667,
        "n_bids": 232,
        "n_urls": 153,
        "result": 0.994
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.5,
        "bids_per_auction_mean": 1,
        "n_bids": 4,
        "n_urls": 4,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 2.241340064,
        "on_ip_that_has_a_bot_mean": 0.407692308,
        "bids_per_auction_mean": 2.424050633,
        "n_bids": 383,
        "n_urls": 99,
        "result": 0.988
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.989842809
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 22.75956171,
        "on_ip_that_has_a_bot_mean": 0.327731092,
        "bids_per_auction_mean": 7.470588235,
        "n_bids": 127,
        "n_urls": 27,
        "result": 0.982
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 9.833333333,
        "n_bids": 118,
        "n_urls": 114,
        "result": 0.842
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.589144606,
        "on_ip_that_has_a_bot_mean": 0.192307692,
        "bids_per_auction_mean": 1.5,
        "n_bids": 27,
        "n_urls": 1,
        "result": 0.992
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.655625359,
        "on_ip_that_has_a_bot_mean": 0.068965517,
        "bids_per_auction_mean": 2.1,
        "n_bids": 63,
        "n_urls": 7,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 1.455580294,
        "on_ip_that_has_a_bot_mean": 0.350393701,
        "bids_per_auction_mean": 2.630252101,
        "n_bids": 313,
        "n_urls": 20,
        "result": 0.934
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 8.519944782,
        "on_ip_that_has_a_bot_mean": 0.884615385,
        "bids_per_auction_mean": 5.363636364,
        "n_bids": 118,
        "n_urls": 3,
        "result": 0.998
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.555555556,
        "bids_per_auction_mean": 1,
        "n_bids": 10,
        "n_urls": 3,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.25,
        "bids_per_auction_mean": 1,
        "n_bids": 4,
        "n_urls": 3,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 4.84315327,
        "on_ip_that_has_a_bot_mean": 0.6,
        "bids_per_auction_mean": 3.444444444,
        "n_bids": 31,
        "n_urls": 16,
        "result": 0.988
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 5.187580372,
        "on_ip_that_has_a_bot_mean": 0.237373737,
        "bids_per_auction_mean": 4.633540373,
        "n_bids": 746,
        "n_urls": 452,
        "result": 0.946
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1,
        "n_bids": 2,
        "n_urls": 1,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.5,
        "bids_per_auction_mean": 2,
        "n_bids": 2,
        "n_urls": 2,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.989842809
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.333333333,
        "bids_per_auction_mean": 1,
        "n_bids": 3,
        "n_urls": 2,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 25.59571507,
        "on_ip_that_has_a_bot_mean": 0.175141243,
        "bids_per_auction_mean": 9.432692308,
        "n_bids": 1962,
        "n_urls": 16,
        "result": 0.842
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 2,
        "n_bids": 2,
        "n_urls": 1,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.043321699,
        "on_ip_that_has_a_bot_mean": 0.447368421,
        "bids_per_auction_mean": 1.34375,
        "n_bids": 43,
        "n_urls": 30,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.333333333,
        "bids_per_auction_mean": 4.291666667,
        "n_bids": 103,
        "n_urls": 6,
        "result": 0.994
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 3.252859923,
        "on_ip_that_has_a_bot_mean": 0.196078431,
        "bids_per_auction_mean": 3,
        "n_bids": 60,
        "n_urls": 8,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1,
        "n_bids": 2,
        "n_urls": 1,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1,
        "n_bids": 2,
        "n_urls": 1,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 2,
        "n_bids": 2,
        "n_urls": 2,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.979897064
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 4.381020961,
        "on_ip_that_has_a_bot_mean": 0.235181644,
        "bids_per_auction_mean": 3.867924528,
        "n_bids": 615,
        "n_urls": 67,
        "result": 0.966
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1,
        "n_bids": 2,
        "n_urls": 1,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 3.872243195,
        "on_ip_that_has_a_bot_mean": 0.411764706,
        "bids_per_auction_mean": 2.733333333,
        "n_bids": 41,
        "n_urls": 15,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.4,
        "bids_per_auction_mean": 1,
        "n_bids": 10,
        "n_urls": 10,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 164.0244064,
        "on_ip_that_has_a_bot_mean": 0.576363636,
        "bids_per_auction_mean": 60.86075949,
        "n_bids": 4808,
        "n_urls": 3493,
        "result": 0.766
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.2,
        "bids_per_auction_mean": 1,
        "n_bids": 5,
        "n_urls": 4,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.2,
        "bids_per_auction_mean": 1.4,
        "n_bids": 21,
        "n_urls": 4,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.46209812,
        "on_ip_that_has_a_bot_mean": 0.4,
        "bids_per_auction_mean": 9.333333333,
        "n_bids": 28,
        "n_urls": 6,
        "result": 0.846
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.666666667,
        "bids_per_auction_mean": 1,
        "n_bids": 10,
        "n_urls": 3,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.142857143,
        "bids_per_auction_mean": 1.666666667,
        "n_bids": 15,
        "n_urls": 3,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.198854339,
        "on_ip_that_has_a_bot_mean": 0.304347826,
        "bids_per_auction_mean": 1.5,
        "n_bids": 81,
        "n_urls": 66,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1,
        "n_bids": 3,
        "n_urls": 2,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 3.167488734,
        "on_ip_that_has_a_bot_mean": 0.076923077,
        "bids_per_auction_mean": 3.4,
        "n_bids": 51,
        "n_urls": 5,
        "result": 0.978
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.989842809
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 4.666666667,
        "n_bids": 70,
        "n_urls": 2,
        "result": 0.994
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.25,
        "bids_per_auction_mean": 1,
        "n_bids": 4,
        "n_urls": 3,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 18.58720591,
        "on_ip_that_has_a_bot_mean": 0.181444992,
        "bids_per_auction_mean": 9.164383562,
        "n_bids": 1338,
        "n_urls": 486,
        "result": 0.884
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 1.204083487,
        "on_ip_that_has_a_bot_mean": 0.851851852,
        "bids_per_auction_mean": 1.947368421,
        "n_bids": 37,
        "n_urls": 19,
        "result": 0.998
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.979897064
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.109861229,
        "on_ip_that_has_a_bot_mean": 0.272727273,
        "bids_per_auction_mean": 1.6,
        "n_bids": 16,
        "n_urls": 4,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.159957042,
        "on_ip_that_has_a_bot_mean": 0.142857143,
        "bids_per_auction_mean": 1.538461538,
        "n_bids": 20,
        "n_urls": 15,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.23104906,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1.666666667,
        "n_bids": 5,
        "n_urls": 3,
        "result": 0.994
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 2.893442687,
        "on_ip_that_has_a_bot_mean": 0.512195122,
        "bids_per_auction_mean": 4.384615385,
        "n_bids": 57,
        "n_urls": 2,
        "result": 0.996
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.193560051,
        "on_ip_that_has_a_bot_mean": 0.379310345,
        "bids_per_auction_mean": 1.6,
        "n_bids": 32,
        "n_urls": 17,
        "result": 0.998
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 4.05554086,
        "on_ip_that_has_a_bot_mean": 0.123595506,
        "bids_per_auction_mean": 4.085714286,
        "n_bids": 143,
        "n_urls": 28,
        "result": 0.992
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 76.05456539,
        "on_ip_that_has_a_bot_mean": 0.161078546,
        "bids_per_auction_mean": 20.23823529,
        "n_bids": 6881,
        "n_urls": 1654,
        "result": 0.834
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.5,
        "bids_per_auction_mean": 1,
        "n_bids": 4,
        "n_urls": 2,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.069314718,
        "on_ip_that_has_a_bot_mean": 0.181818182,
        "bids_per_auction_mean": 1.2,
        "n_bids": 12,
        "n_urls": 10,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 109.4465756,
        "on_ip_that_has_a_bot_mean": 0.185300207,
        "bids_per_auction_mean": 27.63172043,
        "n_bids": 10279,
        "n_urls": 8868,
        "result": 0.942
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.989842809
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 35.28315426,
        "on_ip_that_has_a_bot_mean": 0.053333333,
        "bids_per_auction_mean": 14.83870968,
        "n_bids": 460,
        "n_urls": 159,
        "result": 0.622
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.476268751,
        "on_ip_that_has_a_bot_mean": 0.678571429,
        "bids_per_auction_mean": 1.96875,
        "n_bids": 189,
        "n_urls": 22,
        "result": 0.988
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 3,
        "n_bids": 3,
        "n_urls": 2,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.529675638,
        "on_ip_that_has_a_bot_mean": 0.375,
        "bids_per_auction_mean": 1.666666667,
        "n_bids": 10,
        "n_urls": 3,
        "result": 0.996
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.989842809
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 64.5485655,
        "on_ip_that_has_a_bot_mean": 0.16798419,
        "bids_per_auction_mean": 19.22857143,
        "n_bids": 673,
        "n_urls": 157,
        "result": 0.908
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.979897064
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.333333333,
        "bids_per_auction_mean": 1.166666667,
        "n_bids": 7,
        "n_urls": 6,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 2.48490665,
        "on_ip_that_has_a_bot_mean": 0.5,
        "bids_per_auction_mean": 4.5,
        "n_bids": 9,
        "n_urls": 2,
        "result": 0.996
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 9.128286282,
        "on_ip_that_has_a_bot_mean": 0.818181818,
        "bids_per_auction_mean": 5.598837209,
        "n_bids": 963,
        "n_urls": 118,
        "result": 0.922
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 59.81361447,
        "on_ip_that_has_a_bot_mean": 0.143782476,
        "bids_per_auction_mean": 18.69948187,
        "n_bids": 18045,
        "n_urls": 2999,
        "result": 0.742
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 5.574157608,
        "on_ip_that_has_a_bot_mean": 0.29040404,
        "bids_per_auction_mean": 4.410958904,
        "n_bids": 644,
        "n_urls": 4,
        "result": 0.878
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1.333333333,
        "n_bids": 4,
        "n_urls": 1,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.5,
        "bids_per_auction_mean": 1.285714286,
        "n_bids": 9,
        "n_urls": 6,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.3,
        "bids_per_auction_mean": 1,
        "n_bids": 10,
        "n_urls": 6,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 7.667965027,
        "on_ip_that_has_a_bot_mean": 0.333333333,
        "bids_per_auction_mean": 5,
        "n_bids": 20,
        "n_urls": 3,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.979897064
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.2,
        "bids_per_auction_mean": 1,
        "n_bids": 5,
        "n_urls": 3,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 10.67068328,
        "on_ip_that_has_a_bot_mean": 0.45026178,
        "bids_per_auction_mean": 5.461077844,
        "n_bids": 912,
        "n_urls": 78,
        "result": 0.852
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 16.56150162,
        "on_ip_that_has_a_bot_mean": 0.38,
        "bids_per_auction_mean": 6.535714286,
        "n_bids": 183,
        "n_urls": 86,
        "result": 0.862
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 101.760391,
        "on_ip_that_has_a_bot_mean": 0.185185185,
        "bids_per_auction_mean": 25.65168539,
        "n_bids": 2283,
        "n_urls": 1686,
        "result": 0.89
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.989842809
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 2,
        "n_bids": 2,
        "n_urls": 1,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 125.8038777,
        "on_ip_that_has_a_bot_mean": 0.121905941,
        "bids_per_auction_mean": 24.34741784,
        "n_bids": 5186,
        "n_urls": 1148,
        "result": 0.86
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 3.290181437,
        "on_ip_that_has_a_bot_mean": 0.428571429,
        "bids_per_auction_mean": 4.074074074,
        "n_bids": 110,
        "n_urls": 68,
        "result": 0.988
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 6.711187673,
        "on_ip_that_has_a_bot_mean": 0.162393162,
        "bids_per_auction_mean": 5.288888889,
        "n_bids": 476,
        "n_urls": 26,
        "result": 0.962
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.832837994,
        "on_ip_that_has_a_bot_mean": 0.2,
        "bids_per_auction_mean": 2.777777778,
        "n_bids": 25,
        "n_urls": 1,
        "result": 0.984
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.072962861,
        "on_ip_that_has_a_bot_mean": 0.181818182,
        "bids_per_auction_mean": 1.473684211,
        "n_bids": 28,
        "n_urls": 20,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.358351894,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1.8,
        "n_bids": 9,
        "n_urls": 1,
        "result": 0.84
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.979897064
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.5,
        "bids_per_auction_mean": 1,
        "n_bids": 4,
        "n_urls": 1,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 16.67222726,
        "on_ip_that_has_a_bot_mean": 0.257142857,
        "bids_per_auction_mean": 8,
        "n_bids": 248,
        "n_urls": 100,
        "result": 0.952
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.25,
        "bids_per_auction_mean": 1.333333333,
        "n_bids": 4,
        "n_urls": 4,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 2,
        "n_bids": 2,
        "n_urls": 2,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 0,
        "n_bids": 0,
        "n_urls": 0,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.488406913,
        "on_ip_that_has_a_bot_mean": 0.4,
        "bids_per_auction_mean": 1.971428571,
        "n_bids": 69,
        "n_urls": 12,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.010830425,
        "on_ip_that_has_a_bot_mean": 0.8,
        "bids_per_auction_mean": 1.296875,
        "n_bids": 83,
        "n_urls": 2,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.5,
        "bids_per_auction_mean": 1,
        "n_bids": 2,
        "n_urls": 2,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.989842809
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1,
        "n_bids": 3,
        "n_urls": 2,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.989842809
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 1.553433565,
        "on_ip_that_has_a_bot_mean": 0.072289157,
        "bids_per_auction_mean": 2.195121951,
        "n_bids": 90,
        "n_urls": 2,
        "result": 0.986
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 1.58200776,
        "on_ip_that_has_a_bot_mean": 0.105263158,
        "bids_per_auction_mean": 3.12962963,
        "n_bids": 169,
        "n_urls": 2,
        "result": 0.848
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.692307692,
        "bids_per_auction_mean": 1.166666667,
        "n_bids": 28,
        "n_urls": 16,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 8.04928524,
        "on_ip_that_has_a_bot_mean": 0.289527721,
        "bids_per_auction_mean": 5.424,
        "n_bids": 678,
        "n_urls": 267,
        "result": 0.98
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.810234051,
        "on_ip_that_has_a_bot_mean": 0.090909091,
        "bids_per_auction_mean": 2.333333333,
        "n_bids": 56,
        "n_urls": 5,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.162887224,
        "on_ip_that_has_a_bot_mean": 0.285714286,
        "bids_per_auction_mean": 1.272727273,
        "n_bids": 14,
        "n_urls": 4,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.989842809
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 3.281307736,
        "on_ip_that_has_a_bot_mean": 0.45505618,
        "bids_per_auction_mean": 3.253424658,
        "n_bids": 475,
        "n_urls": 303,
        "result": 0.954
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.266666667,
        "bids_per_auction_mean": 1.230769231,
        "n_bids": 16,
        "n_urls": 8,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 17.85349873,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 11.66666667,
        "n_bids": 35,
        "n_urls": 3,
        "result": 0.732
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1,
        "n_bids": 2,
        "n_urls": 1,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 2,
        "n_bids": 2,
        "n_urls": 2,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.092698343,
        "on_ip_that_has_a_bot_mean": 0.285714286,
        "bids_per_auction_mean": 1.384615385,
        "n_bids": 126,
        "n_urls": 12,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.333333333,
        "bids_per_auction_mean": 1,
        "n_bids": 3,
        "n_urls": 2,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.23104906,
        "on_ip_that_has_a_bot_mean": 0.6,
        "bids_per_auction_mean": 2,
        "n_bids": 6,
        "n_urls": 1,
        "result": 0.978
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.333333333,
        "bids_per_auction_mean": 1,
        "n_bids": 7,
        "n_urls": 3,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 336.7746472,
        "on_ip_that_has_a_bot_mean": 0.009298819,
        "bids_per_auction_mean": 82.16,
        "n_bids": 4108,
        "n_urls": 1,
        "result": 0.792
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.597253156,
        "on_ip_that_has_a_bot_mean": 0.166666667,
        "bids_per_auction_mean": 2,
        "n_bids": 6,
        "n_urls": 2,
        "result": 0.928
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 12.58056316,
        "on_ip_that_has_a_bot_mean": 0.612903226,
        "bids_per_auction_mean": 6.761904762,
        "n_bids": 142,
        "n_urls": 1,
        "result": 0.934
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.222222222,
        "bids_per_auction_mean": 1.083333333,
        "n_bids": 13,
        "n_urls": 7,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.219176126,
        "on_ip_that_has_a_bot_mean": 0.162790698,
        "bids_per_auction_mean": 1.793103448,
        "n_bids": 52,
        "n_urls": 19,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 1.216407388,
        "on_ip_that_has_a_bot_mean": 0.884615385,
        "bids_per_auction_mean": 3,
        "n_bids": 42,
        "n_urls": 25,
        "result": 0.998
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1.5,
        "n_bids": 6,
        "n_urls": 5,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 4.383667069,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 4.695652174,
        "n_bids": 108,
        "n_urls": 15,
        "result": 0.998
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.989842809
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 43.63203155,
        "on_ip_that_has_a_bot_mean": 0.274376417,
        "bids_per_auction_mean": 13.10631229,
        "n_bids": 3945,
        "n_urls": 1468,
        "result": 0.924
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 68.21315417,
        "on_ip_that_has_a_bot_mean": 0.381552754,
        "bids_per_auction_mean": 20.95238095,
        "n_bids": 3960,
        "n_urls": 1159,
        "result": 0.756
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1,
        "n_bids": 2,
        "n_urls": 2,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.979897064
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 15.87796957,
        "on_ip_that_has_a_bot_mean": 0.254813137,
        "bids_per_auction_mean": 8.171052632,
        "n_bids": 1863,
        "n_urls": 1108,
        "result": 0.964
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0.333333333,
        "bids_per_auction_mean": 1,
        "n_bids": 6,
        "n_urls": 6,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.979897064
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.989842809
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0.057762265,
        "on_ip_that_has_a_bot_mean": 0.705882353,
        "bids_per_auction_mean": 1.416666667,
        "n_bids": 17,
        "n_urls": 13,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 8.363301044,
        "on_ip_that_has_a_bot_mean": 0.397849462,
        "bids_per_auction_mean": 6.647058824,
        "n_bids": 113,
        "n_urls": 1,
        "result": 0.958
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.979897064
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 8.5,
        "n_bids": 51,
        "n_urls": 2,
        "result": 0.926
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 4.375576961,
        "on_ip_that_has_a_bot_mean": 0.846153846,
        "bids_per_auction_mean": 4.5,
        "n_bids": 18,
        "n_urls": 1,
        "result": 0.996
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 6.057037317,
        "on_ip_that_has_a_bot_mean": 0.201995012,
        "bids_per_auction_mean": 4.755555556,
        "n_bids": 642,
        "n_urls": 22,
        "result": 0.956
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1,
        "n_bids": 2,
        "n_urls": 2,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 10.70774694,
        "on_ip_that_has_a_bot_mean": 0.36622807,
        "bids_per_auction_mean": 5.913793103,
        "n_bids": 686,
        "n_urls": 350,
        "result": 0.848
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 3.446832003,
        "on_ip_that_has_a_bot_mean": 0.82278481,
        "bids_per_auction_mean": 3.317073171,
        "n_bids": 272,
        "n_urls": 48,
        "result": 0.982
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 10.25,
        "n_bids": 82,
        "n_urls": 6,
        "result": 0.836
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 1,
        "bids_per_auction_mean": 1,
        "n_bids": 6,
        "n_urls": 3,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 3.500461569,
        "on_ip_that_has_a_bot_mean": 0.5,
        "bids_per_auction_mean": 3.2,
        "n_bids": 16,
        "n_urls": 4,
        "result": 1
      },
      {
        "bids_per_auction_per_ip_entropy_mean": 0,
        "on_ip_that_has_a_bot_mean": 0,
        "bids_per_auction_mean": 1,
        "n_bids": 1,
        "n_urls": 1,
        "result": 0.979897064
      }
    ];

    var data_final = data.map(function(n) {

        var newobj = {};
        newobj.x = n.n_bids;
        newobj.y = n.bids_per_auction_mean;
        newobj.z = n.result;

        return newobj;

    });

    $('#container1').highcharts({

        title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]

    });

    $('#container2').highcharts({
        
chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'Result per mean_bids and num bids'
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Bids Per Auction'
            }
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Number of bids'
            },
            maxPadding: 0.2
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        series: [{
            data: data_final
        }]
    
    });
});

