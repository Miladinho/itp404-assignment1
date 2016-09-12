
// data sets
var reviewsData = {
  data: [
    {
      id: 1,
      attributes: {
        'review-title': 'Terrible!',
        'stars': 1,
        'cost': 'high'
      }
    },
    {
      id: 2,
      attributes: {
        'review-title': 'Decent place',
        'stars': 3,
        'cost': 'average'
      }
    },
    {
      id: 3,
      attributes: {
        'review-title': 'I would come again',
        'stars': 3.5,
        'cost': 'average'
      }
    },
    {
      id: 4,
      attributes: {
        'review-title': 'So good, and cheap!',
        'stars': 4,
        'cost': 'low-average'
      }
    },
    {
      id: 5,
      attributes: {
        'review-title': 'Good, but pricey!',
        'stars': 4,
        'cost': 'high'
      }
    }
  ]
};

var reviews = [
  { id: 1, title: 'Terrible!', stars: 1, cost: 'high' },
  { id: 2, title: 'Decent place', stars: 3, cost: 'average' },
  { id: 3, title: 'I would come again', stars: 3.5, cost: 'average' },
  { id: 4, title: 'So good, and cheap!', stars: 4, cost: 'low-average' },
  { id: 5, title: 'Good, but pricey!', stars: 4, cost: 'high' }
];

// task #2
function findGoodReviews(reviews) {
  return reviews.filter(function(rev)
  {
    return rev.title.toLowerCase().indexOf("good") != -1;
  });
}

console.log(findGoodReviews(reviews));


// task #3

function classifyReviewsByCost(reviews) {
  var high = 0;
  var average = 0;
  var low = 0;
  reviews.forEach(function(rev)
  {
    if (rev.cost == "high")
      {
        high++;
      }
    else if (rev.cost == "average")
      {
        average++;
      }
    else
      {
        low++;
      }
  });
  return {
    high : high,
    average : average,
    'low-average' : low
  };
}

console.log(classifyReviewsByCost(reviews));

// task #1
function extractReviews(reviewsData) {
  
  return reviewsData.data.map(function(review)
  {
    return {
      id : review.id,
      title : review.attributes["review-title"],
      stars : review.attributes.stars,
      cost : review.attributes.cost
    };
    
  });
  
}

console.log(extractReviews(reviewsData));







