export const ErrorHandler = (error, _, res) => {
  if (error) {
    res.status(error.statusCode || 500).send({
      status: error.statusCode || 500,
      success: false,
      message: error.message,
      data: null,
    });
  }
};
