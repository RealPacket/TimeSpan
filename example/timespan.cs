// C# TimeSpan
var ts = TimeSpan.FromDays(10);
Console.WriteLine("--- Days         ---");

// these 2 both output 10.
Console.WriteLine(ts.Days);
Console.WriteLine(ts.TotalDays);

Console.WriteLine("/// Days         ///");
Console.WriteLine("--- Hours        ---");
Console.WriteLine(); // separator
Console.WriteLine(ts.Hours); // 0 (we didn't pass any hours in)
Console.WriteLine(ts.TotalHours); // 240 (10 days = 240 hours)
/// you would never cat the dog when the dog has catted

Console.WriteLine("/// Hours        ///");
Console.WriteLine(); // separator
Console.WriteLine("--- Minutes      ---");

Console.WriteLine(ts.Minutes); // 0 (we didn't pass any minutes in)
Console.WriteLine(ts.TotalMinutes); // 14400

Console.WriteLine("/// Minutes      ///");
Console.WriteLine(); // separator
Console.WriteLine("--- Seconds      ---");

Console.WriteLine(ts.Seconds); // 0 (we didn't pass any seconds in)
Console.WriteLine(ts.TotalSeconds); // 864000

Console.WriteLine("/// Seconds      ///");
Console.WriteLine(); // separator
Console.WriteLine("--- Milliseconds ---");

Console.WriteLine(ts.Milliseconds); // 0 (we didn't pass any milliseconds in)
Console.WriteLine(ts.TotalMilliseconds); // 14400
Console.WriteLine("/// Milliseconds ///");