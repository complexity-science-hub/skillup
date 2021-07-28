//
// Calculate average Bitcoin price
//

db.collection.aggregate([
  {
    $match: {
      Symbol: "btc"
    }
  },
  {
    $group: {
      _id: "$Name",
      total: {
        $avg: "$Price"
      }
    }
  }
])

//
// Get maximum Etherum price
//

db.collection.aggregate([
  {
    $match: {
      Symbol: "eth"
    }
  },
  {
    $group: {
      _id: "$Name",
      total: {
        "$max": "$Price"
      }
    }
  }
])


//
// Get minimum Dogecoin price
//
db.collection.aggregate([
  {
    $match: {
      Symbol: "doge"
    }
  },
  {
    $group: {
      _id: "$Name",
      total: {
        "$min": "$Price"
      }
    }
  }
])


//
// Get Bunnycoin entries
//
db.collection.aggregate([
  {
    "$match": {
      "Name": "Bunnycoin"
    }
  }
])


//
// Add new entry
//
db.collection.insert([
  {
    "Day": Date("2021-07-27T00:00:00.0"),
    "Symbol": "⚗",
    "Name": "alchemist",
    "Price": 52.60
  },
  {
    "Day": Date("2021-07-28T00:00:00.0"),
    "Symbol": "⚗",
    "Name": "alchemist",
    "Price": 52.60
  }
])
  
