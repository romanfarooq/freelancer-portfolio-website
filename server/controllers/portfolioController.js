import Portfolio from "../models/portfolioModel.js";

export async function getAllPortfolios(req, res) {
  try {
    const portfolios = await Portfolio.find({});
    res.status(200).json({ portfolios });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getPortfolioById(req, res) {
  try {
    const userId = req.params.userId;
    const portfolio = await Portfolio.findOne({ user: userId });
    res.status(200).json({ portfolio });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createPortfolio(req, res) {
  try {
    const portfolioData = req.body;
    const newPortfolio = new Portfolio(portfolioData);
    await newPortfolio.save();
    res.status(201).json({ message: "Portfolio created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updatePortfolio(req, res) {
  try {
    const portfolioId = req.params.portfolioId;
    const updatedData = req.body;

    await Portfolio.findByIdAndUpdate(portfolioId, updatedData);

    res.status(200).json({ message: "Portfolio updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deletePortfolio(req, res) {
  try {
    const portfolioId = req.params.portfolioId;

    await Portfolio.findByIdAndDelete(portfolioId);

    res.status(200).json({ message: "Portfolio deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
