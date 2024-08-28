#include <iostream>
#include <vector>

using namespace std;

vector<int> isPossible(vector<int> &arr, int sum, int end, int index, vector<int> &ans)
{

    if (sum == 0)
    {
        return ans;
    }
    if (index == end || sum < 0)
    {
        return {};
    }

    ans.push_back(arr[index]);
    vector<int> result = isPossible(arr, sum - arr[index], end, index + 1, ans);
    if (!result.empty())
    {
        return result;
    }
    ans.pop_back();
    return isPossible(arr, sum, end, index + 1, ans);
}

vector<int> isSubsetSum(vector<int>&arr, int sum, vector<int>&ans)
{

    int end = arr.size();
    int index = 0;

    return isPossible(arr, sum, end, index, ans);
}

int main()
{
    vector<int> arr = {3, 6, 4, 5};
    int sum = 12;
    vector<int> ans;
    ans = isSubsetSum(arr, sum, ans);
    if (!ans.empty())
    {
        for (int i = 0; i < ans.size(); i++)
        {
            cout << ans[i] << " ";
        }
        cout << endl;
    }
    else
    {
        cout << "not found" << endl;
    }

    return 0;
}